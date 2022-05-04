import microSvgIcon from "../assets/icons/timeline/micro.svg";

/*
<div
  class="timeline__machines-container machines-container"
  data-machine-amount="12"
  data-columns="4"
  data-rows="3"
  data-type="micro"
></div>
*/

class Machine {
    constructor(machineType) {
        this.machineType = machineType;
        this.init();
    }

    init() {
        this.machine = this.buildMachine();
    }

    buildMachine() {
        const machineSvg = document.createElement("img");
        machineSvg.src = microSvgIcon;
        if (this.machineType === "small") machineSvg.classList.add("machines-container__machine--small");
        if (this.machineType === "medium") machineSvg.classList.add("machines-container__machine--medium");
        return machineSvg;
    }

}

class MachineContainer {
    constructor(machineContainer) {
        this.machineContainer = machineContainer;
        this.machineAmount = this.machineContainer.dataset.machineAmount;
        this.machineType = this.machineContainer.dataset.type;
        this.columns = this.machineContainer.dataset.columns;
        this.rows = this.machineContainer.dataset.rows;
        this.machines = { rows: [] };
        this.init();
    }

    init() {
        this.buildMachines();
        this.appendMachinesToDom();
    }

    buildMachines() {
        let machineNumber = 0;
        for (let i = 0; i < this.rows; i++) {
            const row = [];
            for (let j = 0; j < this.columns; j++) {
                if (machineNumber >= this.machineAmount) {
                    break;
                }
                row.push(new Machine(this.machineType).machine);
                machineNumber++;
            }
            this.machines.rows.push(row);
        }
    }

    appendMachinesToDom() {
        this.machines.rows.forEach(row => {
            const rowItem = document.createElement("div");
            rowItem.classList.add("machines-container__row");
            row.forEach(machine => {
                rowItem.appendChild(machine);
            });
            this.machineContainer.appendChild(rowItem);
        });
    }
}

export default MachineContainer