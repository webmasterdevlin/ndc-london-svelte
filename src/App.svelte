<script>
	import {Router, Route} from 'svelte-routing';
	import Heroes from './heroes/pages/Heroes.svelte';
	import HeroDetail from './heroes/pages/HeroDetail.svelte';
	import NavBar from './shared/components/NavBar.svelte';
</script>

<Router url="" >
	<NavBar />
	<Route path="/" component={Heroes} />
	<Route path="hero-detail/:id" let:params >
		<HeroDetail id="{params.id}" />
	</Route>
</Router>
