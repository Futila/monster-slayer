function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
} 

const app = Vue.createApp({
  data(){
    return {
      playerHealth: 100, 
      monsterHealth: 100, 
    }
  }, 
  methods: {
    attackMonster()  {
      const attackValue = getRandomNumber(5, 12); 
      this.monsterHealth -= attackValue;
    }, 
    attackPlayer() {
      const attackValue= getRandomNumber(8, 15);
      this.playerHealth -= attackValue;
    }
  }
});


app.mount("#game");