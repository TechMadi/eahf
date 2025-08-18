import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { PrivacyPolicy } from "./privacy-policy";

describe("PrivacyPolicy", () => {
	let component: PrivacyPolicy;
	let fixture: ComponentFixture<PrivacyPolicy>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PrivacyPolicy, RouterTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(PrivacyPolicy);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});

	it("should display current year", () => {
		const currentYear = new Date().getFullYear();
		expect(component.currentYear).toBe(currentYear);
	});

	it("should render privacy policy title", () => {
		const compiled = fixture.nativeElement;
		expect(compiled.querySelector("h1").textContent).toContain(
			"Privacy Policy",
		);
	});
});
