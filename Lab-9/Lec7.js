let car = {
    speedometer: 0,
  
    // Сеттер для оновлення speedometer
    setSpeedometer: function(value) {
      this.speedometer = value;
      return this; // Повертаємо `this` для ланцюгового виклику
    },
  
    // Геттер для отримання значення speedometer
    getSpeedometer: function() {
      console.log(this.speedometer); // Виводимо значення на консоль
      return this;
    },
  
    // Метод для очищення speedometer
    clearSpeedometer: function() {
      this.speedometer = 0;
      return this; // Повертаємо `this` для ланцюгового виклику
    }
  };
  
  // Ланцюговий виклик методів
  car.setSpeedometer(200).setSpeedometer(300).getSpeedometer().clearSpeedometer()
  