<script>
import {scale,fade} from 'svelte/transition'
import Feedbackitem from "./Feedbackitem.svelte";
import {feedbackStore} from '../stores'






</script>
{#each $feedbackStore as fb (fb.id)  }
<div in:scale out:fade={{duration:500}}>
<Feedbackitem item={fb}/>
</div>
{/each}

