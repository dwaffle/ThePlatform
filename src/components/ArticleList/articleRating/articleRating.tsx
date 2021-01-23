// definition of a constructable class
type Constructor = new (...args: any[]) => {};


export function withRating<Parent extends Constructor>( Unrated:Parent ){

    return class extends Unrated {

        get rating(){
            
            // guard for zero
            if( this.ratings.length === 0){
                return 0;
            }

            // find average rating
            else {
                return (this.ratings.reduce(( total, current ) => total + current, 0) / this.ratings.length).toFixed(1);
            }

        }

        ratings:number[]=[];

        rate( rating:number ){
            this.ratings.push( rating );
        }

    }

}