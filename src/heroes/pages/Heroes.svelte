<script>
    import { heroStore } from '../hero.store.js'
    import {get} from '../../shared/api.call.js';
    import {Button} from 'svelte-mui';
    import ProfileForm from '../../shared/components/ProfileForm.svelte'

    import {onMount} from 'svelte';
    
    let heroForm = {
        firstName: "",
        lastName: "",
        house: "",
        knownAs: "",
    }

    onMount(async () => {
       await heroStore.loadHeroes();
    })

    const handleClickDelete = async (id) => {
        await heroStore.removeHero(id);
    }

    const onSave = async () => {
        
    }

</script>
<h2>Heroes Works!</h2>
<ProfileForm text="Save" obj={heroForm} handleOnSubmit={onSave} />
<div>
    {#if $heroStore.isLoading}
        <h2>Loading.. Please wait..</h2>
    {:else}
        {#each $heroStore.heroes as hero}
            <li key={hero.id}>
                {hero.firstName} {hero.lastName}
                <Button on:click={() => handleClickDelete(hero.id)} outlined color="crimson">DELETE</Button>
            </li>
        {/each}
    {/if}
</div>

