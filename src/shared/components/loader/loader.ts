import { Component, input, OnInit, output, signal } from "@angular/core";

@Component({
	selector: "app-loader",
	imports: [],
	templateUrl: "./loader.html",
	styleUrl: "./loader.scss",
})
export class Loader implements OnInit {
	progress = signal(0);

	done = output();

	ngOnInit(): void {
		const interval = setInterval(() => {
			if (this.progress() < 100) {
				this.progress.update((prev) => prev + 1);
			} else {
				clearInterval(interval);
				setTimeout(() => {
					this.done.emit(); // let parent know it's done
				}, 300);
			}
		}, 20);
	}
}
