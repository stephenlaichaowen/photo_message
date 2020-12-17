<template>
  <!-- <div id="message-list" class="bg-info"> -->
  <div id="message-list">
    <Message />   
  </div>
</template>

<style scoped>
#message-list {
  /* height: calc(100vh - 6.25rem);  
  width: 100%;
  position: absolute;
  top: 3.125rem;
  bottom: 3.125rem;
  left: 0;   */

  z-index: 100;

  /* position: relative;
  top: 3.125rem;
  bottom: 3.125rem; */

  padding: 3.125rem 0;
  overflow: auto;    
}
</style>
