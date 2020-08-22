<template>
  <div class="button-wrap">
      <hat-navbar title="button按钮" border ></hat-navbar>
      <hat-button type="primary" size="small">主要按钮</hat-button>
      <hat-button type="info" size="small">信息按钮</hat-button>
      <hat-button type="warning" size="small">警告按钮</hat-button>
      <hat-button type="danger" size="small">警告按钮</hat-button>
      <hat-button type="danger" size="small" plain>朴素警告按钮</hat-button>
      <hat-button  size="small" plain>朴素警告按钮</hat-button>
      <hat-button type="primary" size="small" plain>朴素主要按钮</hat-button>
      <hat-button type="primary" size="small" circle>朴素圆角主要按钮</hat-button>
      <hat-button type="primary" size="small" round plain>朴素圆角主要按钮</hat-button>
      <hat-button type="info" size="small" round plain>朴素圆角主要按钮</hat-button>
      <hat-button type="info" size="small" round plain icon="add">禁用带图标按钮</hat-button>
      <hat-button type="info" size="small" round icon="add" disabled>带图标按钮</hat-button>
      <hat-button type="info" size="small" block>块级别按钮</hat-button>
      <hat-button type="info" size="small" block round>块级别按钮</hat-button>
      <hat-button type="danger" size="large" round >大按钮</hat-button>
      <hat-button type="danger" size="mini" round >小按钮</hat-button>
      <hat-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="small">自定义颜色</hat-button>
      <hat-button color="linear-gradient(to right, #ff6034, #ee0a24)" size="small" icon="camera" circle>自定义颜色带图标</hat-button>
  </div>
</template>

<script>
export default {

}
</script>