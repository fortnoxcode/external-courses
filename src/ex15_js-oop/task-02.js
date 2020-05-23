class ElectricalAppliance {
  constructor(name, powerConsumption) {
    this.name = name;
    this.energyConsumption = powerConsumption;
    this.isActive = false;
  }

  tumbler() {
    this.isActive = !this.isActive;
    console.log(`${this.name} is turned ${this.isActive ? 'on' : 'off'}`);
    return this.isActive;
  }

  get deviceStatus() {
    return `${this.name} is turned ${this.isActive ? 'on' : 'off'
            }. The energy consumption is ${this.energyConsumption}W in a hour.`;
  }
}

class Kettle extends ElectricalAppliance {
  constructor(name, powerConsumption, waterLevel, waterVolume) {
    super(name, powerConsumption);
    this.waterLevel = waterLevel || 0;
    this.waterVolume = waterVolume || 3000;
  }

  addWater(amount) {
    if (amount > this.waterVolume || amount <= 0) {
      throw new Error('Too much water. Prepare your boat, we sail away');
    } else {
      console.log(`${amount}ml of water was poured`);
      this.waterLevel = amount;
    }
    return this;
  }

  get waterNow() {
    return this.waterLevel;
  }
}

class Bridge extends ElectricalAppliance {
  constructor(name, powerConsumption) {
    super(name, powerConsumption);
    this.beer = 0;
    this.fridgeBottleHolder = 6;
  }

  addBeer(amount) {
    if (amount > this.fridgeBottleHolder) {
      throw new Error('Too much beer. Stop it lol');
    } else {
      this.beer = amount;
    }
    return this;
  }

  get bottlesOfBeer() {
    return this.beer;
  }
}

class Lighter extends ElectricalAppliance {
  constructor(name, powerConsumption, colorOfLight) {
    super(name, powerConsumption);
    this.colorOfLight = colorOfLight || 'yellow';
  }

  changeColor(color) {
    if (typeof color !== 'string') {
      throw new Error('The value entered must be a string.');
    }
  }

  get color() {
    return this.colorOfLight;
  }
}

class Room {
  constructor(type, socketAmount, ...devices) {
    this.type = type;
    this.socketAmount = socketAmount;
    this.devices = devices;
    this.allEnergyConsumption = 0;
  }

  turnDevicesOn() {
    if ((this.devices.length) <= this.socketAmount) {
      this.devices.forEach((item, i) => {
        item.isActive = true;
      });
    } else {
      this.turnDevicesOn(this.devices.splice((this.socketAmount)));
      this.devices.forEach((item, i) => {
        console.log(`${item.name} was turned on.`);
      });
    }
    return this;
  }

  totalEnergyConsumption() {
    this.devices.forEach((item, i) => {
      this.allEnergyConsumption += item.energyConsumption;
    });
    return this.allEnergyConsumption;
  }

  searchDevice(name) {
    const device = this.devices.filter((item) => {
      return item.name.toLowerCase() === name.toLowerCase();
    });
    return device;
  }
}

const kitchenDevices = [
  new Kettle('LG', 50),
  new Bridge('Samsung', 150),
  new Lighter('Phillips', 40)
];
const kitchen = new Room('kitchen', 3, ...kitchenDevices);
