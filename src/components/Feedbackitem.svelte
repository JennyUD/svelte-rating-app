<script>
import Card from "./Card.svelte";
import {feedbackStore} from '../stores'



const handleDelete =(id)=>{
    feedbackStore.update((currentFeedBack)=>{
    return currentFeedBack.filter(x=>x.id !==id)
    })
}

    
    
    
export let item;
</script>


<Card>
    <div class="num-display">{item.rating}</div>
    <button class="close" on:click={()=>handleDelete(item.id)}>X</button> 
         {item.text} 
</Card>



<style>

    .num-display{
        position: absolute;
        top:-10px;
        left:-10px;
        width:50px;
        height:50px;
        background:#ff6a95;
        color:#fff;
        border: 1px #eee solid;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size:20px;
    }

    .close{
        position: absolute;
        top:-10px;
        right:-10px;
        width:50px;
        height:50px;
        background:#000;
        color:#fff;
        border: 1px #eee solid;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size:19px;
        cursor: pointer;
    }



</style>