<script>
    import { Button } from 'svelte-mui';

    export let handleOnSubmit;
    export let obj = {};
    export let text = "";
</script>

<form on:submit|preventDefault={handleOnSubmit(obj)}>
    <input type="text" placeholder="First Name" 
    bind:value={obj.firstName}  >
    <input type="text" placeholder="Last Name" 
    bind:value={obj.lastName}  >
    <input type="text" placeholder="House" 
    bind:value={obj.house}  >
    <input type="text" placeholder="Known As" 
    bind:value={obj.knownAs}  >

    <Button type="submit" outlined style="color: forestgreen">
        {text}
    </Button>

</form>