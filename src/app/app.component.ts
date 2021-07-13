import { Component } from "@angular/core";
import { ListManagementService } from "./services/list-management-service.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
})
export class AppComponent {
  constructor(private listManagementService: ListManagementService) {}
  listManagement = this.listManagementService;
}
