<template>
  <div
    class="whatsapp-float"
    :style="whatsappStyle"
    @mousedown="onDragStart"
    @mousemove="onDrag"
    @mouseup="onDragEnd"
    @touchstart="onDragStart"
    @touchmove="onDrag"
    @touchend="onDragEnd"
    @click="openWhatsApp"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      class="whatsapp-logo"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      dragging: false,
      position: { x: 0, y: 0 },
      initialPosition: { x: 0, y: 0 },
      offset: { x: 0, y: 0 },
    };
  },
  computed: {
    whatsappStyle() {
      return {
        position: "fixed",
        bottom: this.position.y + "px",
        right: this.position.x + "px",
        zIndex: 9999,
        cursor: "pointer",
      };
    },
  },
  methods: {
    onDragStart(event) {
      this.dragging = true;
      if (event.type === "touchstart") {
        this.initialPosition.x = event.touches[0].clientX;
        this.initialPosition.y = event.touches[0].clientY;
      } else {
        this.initialPosition.x = event.clientX;
        this.initialPosition.y = event.clientY;
      }
      this.offset.x = this.position.x;
      this.offset.y = this.position.y;
    },
    onDrag(event) {
      if (!this.dragging) return;
      if (event.type === "touchmove") {
        this.position.x = this.offset.x - (event.touches[0].clientX - this.initialPosition.x);
        this.position.y = this.offset.y - (event.touches[0].clientY - this.initialPosition.y);
      } else {
        this.position.x = this.offset.x - (event.clientX - this.initialPosition.x);
        this.position.y = this.offset.y - (event.clientY - this.initialPosition.y);
      }
    },
    onDragEnd() {
      this.dragging = false;
    },
    openWhatsApp() {
      window.open("https://wa.me/2348181814007", "_blank");
    },
  },
};
</script>

<style scoped>
.whatsapp-float {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

.whatsapp-logo {
  width: 40px;
  height: 40px;
}
</style>
