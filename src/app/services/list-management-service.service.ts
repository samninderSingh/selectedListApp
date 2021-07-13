import { Injectable, OnInit } from "@angular/core";
import { status } from "./../../assets/constants";

// Create an interface
interface item {
  id: number;
  checked: boolean;
  name: string;
  device: string;
  path: string;
  status: string;
}

@Injectable({
  providedIn: "root",
})
export class ListManagementService {
  selectedItemCount: number = 0;
  availableItemCount: number = 0;
  // in future, it might come from API
  listOfItems: Array<item> = [
    {
      id: 1,
      checked: false,
      name: "smss.exe",
      device: "Stark",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
      status: "scheduled",
    },

    {
      id: 2,
      checked: false,
      name: "netsh.exe",
      device: "Targaryen",
      path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
      status: "available",
    },

    {
      id: 3,
      checked: false,
      name: "uxtheme.dll",
      device: "Lannister",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
      status: "available",
    },

    {
      id: 4,
      checked: false,
      name: "cryptbase.dll",
      device: "Martell",
      path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
      status: "scheduled",
    },

    {
      id: 5,
      checked: false,
      name: "7za.exe",
      device: "Baratheon",
      path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
      status: "scheduled",
    },
  ];
  result: any = [];

  // I have used the high order function to separate the logic which is reuseable
  highOrderFunction(callback) {
    for (let itemIndex in this.listOfItems) {
      let obj = this.listOfItems[itemIndex];
      if (callback(obj, itemIndex)) break;
    }
  }
  constructor() {
    this.highOrderFunction((obj) => {
      if (obj.status == status.AVAILABLE) {
        this.availableItemCount++;
      }
    });
  }

  // update the checked status if you chnage the value of a single checkbox
  updateCheckedStatus(id) {
    this.highOrderFunction((obj) => {
      if (obj.id == id) {
        obj.checked = !obj.checked;
        obj.checked == true
          ? this.selectedItemCount++
          : this.selectedItemCount--;
        this.updateResult(obj.checked, obj);
        return true;
      }
    });
  }
  // Return flag for Intermidate
  intermidateCheckBoxStatus() {
    return (
      this.selectedItemCount !== this.availableItemCount &&
      this.selectedItemCount
    );
  }
  // When you all select/deselect.
  allChecked(val) {
    val = val.target.checked;
    this.result = [];
    let count = 0;
    this.highOrderFunction((obj) => {
      if (obj.status == status.AVAILABLE) {
        count++;
        obj.checked = val;
        this.result.push(obj);
      }
    });
    this.selectedItemCount = val ? count : 0;
    if (!val) this.result = [];
  }

  updateResult(state, updateObj) {
    if (!state) {
      for (let index in this.result) {
        let obj = this.result[index];
        if (obj.id == updateObj.id) {
          this.result.splice(index, 1);
          break;
        }
      }
    } else {
      this.result.push(updateObj);
    }
  }

  printResult() {
    alert(JSON.stringify(this.result));
    console.log(this.result);
  }
}
