<script>
    import { heroStore } from '../hero.store.js'
    import {get} from '../../shared/api.call.js';
    import {onMount} from 'svelte';
    let heroes = [];

    onMount(async () => {
       await heroStore.loadHeroes();
    })

</script>
<h2>Heroes Works!</h2>

<div>
    {#if $heroStore.isLoading}
        <h2>Loading.. Please wait..</h2>
    {:else}
        {#each $heroStore.heroes as hero}
            <li key={hero.id}>
                {hero.firstName} {hero.lastName}
            </li>
        {/each}
    {/if}
</div>

