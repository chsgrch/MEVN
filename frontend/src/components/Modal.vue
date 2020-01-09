<template>
  <div class="modalComp">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <form id="uploadForm" name="uploadForm" enctype="multipart/form-data" class="custom-file" @submit.prevent="uploadFiles">
            <div class="pb-3">
              <input
                type="text"
                placeholder="Фамилия"
                id="surname"
                ref="userSurname"
                name="surname"
                required
              />
            </div>
            <div class="pb-3">
              <input type="text" required placeholder="Имя" id="name" ref="userName" name="name" />
            </div>
            <div class="pb-3">
              <input type="email" required placeholder="e-mail" id="mail" ref="userMail" name="mail" />
            </div>

            <div class="custom-file">
              <input
                type="file"
                required
                ref="userFile"
                class="custom-file-input"
                id="files"
                name="files"
                @change="previewFiles"
              />
              <label class="custom-file-label" for="userFile" placeholder="Имя файла">
                <p v-if="visibleFileName">{{files[0].name}}</p>
              </label>
            </div>

            <div>
               <button class="btn btn-primary mt-3">Отправить</button>
            </div>

            <div>
              <button type="button" class="btn btn-primary mt-3" @click="$emit('close')">Закрыть</button>
            </div>
            <div v-if="visibleStatusSendResponse" class="pt-3">
              <p v-if="statusSendToBackend=='complete'">Данные отправлены успешно</p>
              <p v-if="statusSendToBackend!='' && statusSendToBackend!='complete'">При отправке данных произошла ошибка: "{{this.statusSendToBackend}}"</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import axios from "axios";

export default {
  name: "modalComp",
  data() {
    return {
      files: [],
      visibleFileName: false,
      visibleStatusSendResponse: false,
      statusSendToBackend: ""
    };
  },
  methods: {
    uploadFiles() {
      this.setStatVisibleResponse;
      var s = this;
      const data = new FormData(document.getElementById("uploadForm"));
      var imagefile = document.querySelector("#files");
      data.append("file", imagefile.files[0]);
      data.append("surname", this.$refs.userSurname.value); //s.surname
      data.append("name", this.$refs.userName.value); //s.name
      data.append("mail", this.$refs.userMail.value); //s.mail
      data.append("vacansy", this.jobParams.post);
      data.append("vacansyId", this.jobParams._id);
      axios
        .post("http://127.0.0.1:8080/api/upload", data, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          console.log(response);
          this.statusSendToBackend = response.data;
        })
        .catch(error => {
          this.statusSendToBackend = error.response!=undefined ? error.response.data : 'Отсутствует соединение с сервером';
          console.log(` -> ERROR RESPONSE: ${error.response}`);
        });
    },
    // writeContactsInBase,
    previewFiles() {
      this.files = this.$refs.userFile.files;
      this.visibleFileName = true;
    }
  },
  props: {
    jobParams: {
      type: Object
    }
  },
  computed: {
    setStatVisibleResponse: function() {
      this.visibleStatusSendResponse = true;
    }
  }
};
</script>

<style>
.modalComp {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  justify-content: space-between;
  background: grey;
}

.modalComp #uploadForm #name,
#mail,
#surname {
  width: 100%;
}

.modalComp #uploadForm input {
  height: calc(1.5em + 0.75rem + 2px);
  border-radius: 0.25rem;
  padding: 5px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>