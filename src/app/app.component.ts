import { Component, computed, signal } from '@angular/core'

@Component({
	standalone: true,
	selector: 'app-root',
	template: `
		<div>{{ count() }}</div>
		<button (click)="increment()">Increment</button>
		<button (click)="decrement()">Decrement</button>
	`,
})
export class AppComponent {
	count = signal(5)
	double = computed(() => this.count() * 2)

	increment(): void {
		this.count.update((count) => count + 1)
	}

	decrement(): void {
		this.count.update((count) => count - 1)
	}
}
