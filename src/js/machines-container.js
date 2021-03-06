import microSvgIcon from "../assets/icons/timeline/micro.svg";

class Machine {
    constructor(machineType) {
        this.machineType = machineType;
        this._machine = undefined;
        this.init();
    }

    init() {

        this._machine = this.buildMachine();
    }

    get machine() {
        return this._machine;
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
        this.isMobile = window.matchMedia("(max-height: 926px)").matches;
        this.init();
    }

    init() {
        if (this.isMobile) {
            this.buildOneMachine();
        } else {
            this.buildMachines();
        }
        this.appendMachinesToDom();
    }

    buildOneMachine() {
        const row = [];
        row.push(new Machine(this.machineType).machine);
        this.machines.rows.push(row);
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