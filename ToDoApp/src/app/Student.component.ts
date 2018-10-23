import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'app-student',
    template: `
    <div> 
        <h1 class="text-center"> <ng-content></ng-content> </h1>
        <div class="row">
            <div class="card col-md-3" style="width: 15%; margin-left:5%;">
                <div style="margin: 0 auto;">
                    <img class="card-img-top" src="../assets/images/avatar.png" alt="Card image cap" style="width: 18rem;">
                    <div class="card-body">
                        <h1> Student Profile </h1>
                        <p>Name: {{ user1.name }}</p>
                        <p>Course: {{ user1.course }}</p>
                        <p>Phone Number: {{ user1.phoneNumber }}</p>
                        <p>Email: {{ user1.email }}</p>
                    </div>
                </div>
            </div>
            <div class="card col-md-3" style="width:15%; margin-left:5%;">
                <div style="margin: 0 auto;">
                    <img class="card-img-top" src="../assets/images/avatar2.png" alt="Card image cap" style="width: 18rem;">
                    <div class="card-body">
                        <h1> Student Profile </h1>
                        <p>Name: {{ myuser2.name }}</p>
                        <p>Course: {{ myuser2.course }}</p>
                        <p>Phone Number: {{ myuser2.phoneNumber }}</p>
                        <p>Email: {{ myuser2.email }}</p>
                    </div>
                </div>
            </div>
            <div class="card col-md-3" style="width: 15%; margin-left:5%;">
                <div style="margin: 0 auto;">
                    <img class="card-img-top" src="../assets/images/avatar3.png" alt="Card image cap" style="width: 18rem;">
                    <div class="card-body">
                        <h1> Student Profile </h1>
                        <p>Name: {{ user3.name }}</p>
                        <p>Course: {{ user3.course }}</p>
                        <p>Phone Number: {{ user3.phoneNumber }}</p>
                        <p>Email: {{ user3.email }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})
export class StudentComponent implements OnInit {
    
    
    @Input()user1
    @Input('user2')myuser2
    @Input()user3

    
    constructor(){
    }

    ngOnInit() {
    }

    

}