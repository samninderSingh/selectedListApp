import { Component, Input, OnInit } from "@angular/core";
import { ListManagementService } from "../services/list-management-service.service";
import { status } from "./../../assets/constants";
@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.sass"],
})
export class ListItemComponent {
  @Input() items: any;
  scheduled = status.SCHEDULED;
  available = status.AVAILABLE;
  constructor(private listManagementService: ListManagementService) {}
  listManagement = this.listManagementService;
}
