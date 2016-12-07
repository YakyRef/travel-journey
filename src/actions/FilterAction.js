export const PAYOUTMETHOD='PayoutMethod';
export const ACCOUNTHOLDER='Accountholder';
export const PAYMENT='Payment';
export const ALL='all';
export const FREESEARCH='freeSearch';
export const SPECIFICPM='specificPm';





export const getActivityByFilter = (events,filter) =>{
    let filerList=[];
    if(filter.startDate){
        filerList=events.filter((x)=>{
            const date=new Date(x.eventDate);
            const startDate=new Date(filter.startDate._d);
            const endDate=new Date(filter.endDate._d);
            return date>=startDate&&date<=endDate
        });
    }
    else
        filerList=events;
  switch (filter.filter){
      case PAYOUTMETHOD:
          return filerList.filter((x)=>x.entityType===PAYOUTMETHOD);
      case ACCOUNTHOLDER:
          return filerList.filter((x)=>x.entityType===ACCOUNTHOLDER);
      case  PAYMENT:
          return filerList.filter((x)=>x.entityType===PAYMENT);
      case SPECIFICPM:
          if(filter.params.id==='none') return filerList;
          console.log(filter.params.id);
          return filerList.filter((x)=>{
             return parseInt(x.entityId,10)===parseInt(filter.params.id,10)||
                 parseInt(x.paymentMethodId,10)===parseInt(filter.params.id,10)

          });
      case ALL:
          return events;
      case FREESEARCH:
          return filerList.filter((x)=>x.description.contains(filter.text))
      default:
          return filerList;
  }
};