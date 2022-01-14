<template>
  <ul id="loader">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<style scoped>
#loader li {
  list-style: none;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-left: -25px;
  margin-top: -25px;
  background-color: #d5397b;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5) inset;
}
#loader li:nth-child(9n + 1) {
  margin-left: -75px;
  transform: scale(0.5);
  animation: nineone 2s infinite;
}
#loader li:nth-child(9n + 2) {
  margin-top: -75px;
  animation: ninethree 2s infinite;
  transform: scale(0.5);
}
#loader li:nth-child(9n + 3) {
  margin-top: 25px;
  animation: nineseven 2s infinite;
  transform: scale(0.5);
}
#loader li:nth-child(9n + 4) {
  margin-left: 25px;
  animation: ninefive 2s infinite;
  transform: scale(0.5);
}
#loader li:nth-child(9n + 5) {
  margin-left: 25px;
  margin-top: 25px;
  animation: ninesix 2s infinite;
}
#loader li:nth-child(9n + 6) {
  margin-left: -75px;
  margin-top: 25px;
  transform: scale(1);
  animation: nineeight 2s infinite;
}
#loader li:nth-child(9n + 7) {
  margin-left: -75px;
  margin-top: -75px;
  transform: scale(1);
  animation: ninetwo 2s infinite;
}
#loader li:nth-child(9n + 8) {
  margin-left: 25px;
  margin-top: -75px;
  transform: scale(1);
  animation: ninefour 2s infinite;
}

@keyframes nineone {
  0% {
    margin-top: -25px;
    transform: scale(0.5);
  }
  100% {
    margin-top: -75px;
    transform: scale(1);
  }
}

@keyframes ninetwo {
  0% {
    margin-left: -75px;
  }
  100% {
    margin-left: -25px;
    transform: scale(0.5);
  }
}

@keyframes ninethree {
  0% {
    margin-left: -25px;
  }
  100% {
    margin-left: 25px;
    transform: scale(1);
  }
}

@keyframes ninefour {
  0% {
    margin-top: -75px;
  }
  100% {
    margin-top: -25px;
    transform: scale(0.5);
  }
}

@keyframes ninefive {
  0% {
    margin-top: -25px;
  }
  100% {
    margin-top: 25px;
    transform: scale(1);
  }
}

@keyframes ninesix {
  0% {
    margin-left: 25px;
  }
  100% {
    margin-left: -25px;
    transform: scale(0.5);
  }
}

@keyframes nineseven {
  0% {
    margin-left: -25px;
  }
  100% {
    margin-left: -75px;
    transform: scale(1);
  }
}

@keyframes nineeight {
  0% {
    margin-top: 25px;
  }
  100% {
    margin-top: -25px;
    transform: scale(0.5);
  }
}
</style>
