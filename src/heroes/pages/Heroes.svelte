<script>
    import {get} from '../../shared/api.call.js';
    import {onMount} from 'svelte';
    let heroes = [];
    onMount(async () => {
       const {data} = await get('heroes')
       heroes = data;
    })

</script>
<h2>Heroes Works!</h2>
<div>
    {#each heroes as hero}
        <h2 key={hero.id}>{hero.firstName}</h2>
    {/each}
</div>

