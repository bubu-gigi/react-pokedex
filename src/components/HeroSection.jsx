import defaultHero from 'src/assets/images/default-hero.jpg';

export default function HeroSection() {
	return (
		<section className="px-base bg-red-400 py-12">
			<div className="mx-auto grid w-full max-w-4xl grid-rows-[20dvh] items-center gap-8 rounded-xl bg-white p-6 shadow sm:grid-cols-2 sm:grid-rows-[25dvh]">
				<img className="size-full object-cover" src={defaultHero} alt="Mimmo" />
				<div className="flex flex-col gap-1">
					<h1 className="text-2xl font-bold tracking-wide text-red-600">Build your team in seconds</h1>
					<span className="text-pretty text-lg font-light leading-tight">
						Use the integrated pokedex to create your competitive team!
					</span>
				</div>
			</div>
		</section>
	);
}
