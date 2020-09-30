import { World } from 'ecsy';
import { ETLUSystem } from './systems/ETLUSystem';
import { OperationSystem } from './systems/OperationSystem';
import { OperationRoom } from './components/OperationRoom';
import { Room, ActiveRoom } from './components/Room';



console.log("Core Module Instanciated");

export const etluWorld = new World();

document.addEventListener("etlu-xr-init", (e: CustomEvent) => { // change here Event to CustomEvent
    console.log("Core XR Init",e.detail);
    const canvas =  e.detail.canvas;
     etluWorld.registerComponent(Room);
     etluWorld.registerComponent(ActiveRoom);
     etluWorld.registerComponent(OperationRoom);
     etluWorld.registerSystem(OperationSystem);
     etluWorld.registerSystem(ETLUSystem, { canvas: canvas });

     let testOperationRoom = etluWorld.createEntity();
     testOperationRoom.addComponent(Room);
     testOperationRoom.addComponent(ActiveRoom);
     testOperationRoom.addComponent(OperationRoom);
});