
    //Create your constructor funtion with the name Shipment
        function Shipment(id , location , destination, status ,resource){
            this.id = id ; 
            this.location = location ; 
            this.destination = destination ; 
            this.status  = status ; 
            this.resources = resource ; 
        }
        
    
    //Add the updateStatusAndResources using the object prototype
        Shipment.prototype.updateStatusAndResources = function(status , resource){
            this.status = status ;
            this.resources = resource ;
        }
        
    
    //Add the assignResource methods through Object prototype
        Shipment.prototype.assignResources = function(...resourcearrys){
            this.resources.push(resourcearrys) ;  
        }
    
    //Create the object literal with tthe name TrackingSystem
        
        const TrackingSystem = {
            shipments : [], 
            updateStatus : function(id , status){
            // now we are the finding the object and update the object 
            // now we are the using the method of mapping 
             this.shipments = this.shipments.map(function(currentvalue){
                
                if(currentvalue.id == id){
                    
                    currentvalue.status = status ; 
                }
                return currentvalue ; 
            });
            
           //  this.shipment = value ; 
        },
              viewShipment : function(id){
                const value = this.shipments.map(function(currentvalue){
                   
                    if(currentvalue.id == id){
                        console.log(`Shipment ID:${currentvalue.id}`) ; 
                        console.log(`Status:${currentvalue.status}`) ; 
                         console.log(`Resources:${currentvalue.resources}`) ; 
                          console.log(`Location:${currentvalue.location}`) ; 
                          console.log(`Destination:${currentvalue.destination}`) ; 
                    }
                     
                });
                
                
                  
               // now printing the value 
           
                  
                  
                  
              },
        }
    

    //do not modify any other code.
    






    const shipment1 = new Shipment("12345", "New York", "Los Angeles", "En route", ["Driver", "Truck"]);
    shipment1.updateStatusAndResources("Delayed", ["Forklift"]);
    shipment1.assignResources("Worker", "Pallets");
    const shipment2 = new Shipment("67890", "Chicago", "Miami", "In transit", ["Forklift"]);
    shipment2.updateStatusAndResources("In transit", ["Driver"]);
    TrackingSystem.shipments.push(shipment1, shipment2);
    TrackingSystem.updateStatus("12345", "Delivered");
    TrackingSystem.viewShipment("12345");