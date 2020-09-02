<template>
  <div class="hat-upload-wrapper">
    <div class="hat-upload-image-preview-wrapper">
      <template v-if="previewList.length > 0">
        <div
          class="hat-image-component-wrapper"
          v-for="(fileUrl,index) in previewList"
          :key="index"
        >
          <img :src="fileUrl" class="hat-upload-image-preview" />
          <hat-icon
            type="close"
            class="hat-upload-close"
            size="14"
            @click.native="clearFile(index)"
          ></hat-icon>
          <div class="hat-upload-loading-wrapper" v-if="false">
            <hat-loading :show="true" tips="上传中..."></hat-loading>
          </div>
        </div>
      </template>
      <div class="hat-upload-file-wrapper" v-show="previewList.length < limit">
        <hat-icon type="camera"></hat-icon>
        <input
          ref="uploader"
          type="file"
          accept="*"
          :multiple="multiple"
          class="hat-upload-file"
          @change="uploadFile"
        />
      </div>
    </div>
  </div>
</template>

<script>
import icon from '../icon/icon.vue';
import loading from '../loading/loading.vue';

export default {
  name: 'hat-upload',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 3
    }

  },
  components: {
    'hat-icon': icon,
    'hat-loading': loading
  },
  data () {
    return {
      previewList: []
    };
  },
  methods: {

    uploadFile (e) {
      this.translateToBase64(e.target.files);
    },
    translateToBase64 (files) {
      const self = this;
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = function (e) {
          self.previewList.push(e.target.result);
        };
      }
    },
    clearFile (index) {
      console.log(index);
    }
  }
};
</script>
