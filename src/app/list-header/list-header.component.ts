import { Component, OnInit } from "@angular/core";
import { ListManagementService } from "../services/list-management-service.service";

@Component({
  selector: "app-list-header",
  templateUrl: "./list-header.component.html",
  styleUrls: ["./list-header.component.sass"],
})
export class ListHeaderComponent {
  constructor(private listManagementService: ListManagementService) {}
  listManagement = this.listManagementService;
}
