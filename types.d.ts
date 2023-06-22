import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { DefaultUser } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: DefaultUser & {
			id: string;
			stripeCustomerId: string;
			isActive: boolean;
			subscriptionId: string;
		};
	}
}

export type TCustomer = {
	id: string;
	object: string;
	address: null;
	balance: number;
	created: number;
	currency: string;
	default_source: string;
	delinquent: boolean;
	description: string;
	discount: null;
	email: string;
	invoice_prefix: string;
	invoice_settings: InvoiceSettings;
	livemode: boolean;
	metadata: Metadata;
	name: null;
	next_invoice_sequence: number;
	phone: null;
	preferred_locales: any[];
	shipping: null;
	tax_exempt: string;
	test_clock: null;
	isActive: boolean;
	subscriptionId: string;
};

type InvoiceSettings = {
	custom_fields: null;
	default_payment_method: null;
	footer: null;
	rendering_options: null;
};

type Metadata = {
	order_id: string;
};

export type TBilling = {
	id: string;
	object: string;
	application: null;
	application_fee_percent: null;
	automatic_tax: AutomaticTax;
	billing_cycle_anchor: number;
	billing_thresholds: null;
	cancel_at: null;
	cancel_at_period_end: boolean;
	canceled_at: null;
	cancellation_details: CancellationDetails;
	collection_method: string;
	created: number;
	currency: string;
	current_period_end: number;
	current_period_start: number;
	customer: string;
	days_until_due: null;
	default_payment_method: string;
	default_source: null;
	default_tax_rates: any[];
	description: null;
	discount: null;
	ended_at: null;
	items: Items;
	latest_invoice: string;
	livemode: boolean;
	metadata: SubscriptionMetadata;
	next_pending_invoice_item_invoice: null;
	on_behalf_of: null;
	pause_collection: null;
	payment_settings: PaymentSettings;
	pending_invoice_item_interval: null;
	pending_setup_intent: null;
	pending_update: null;
	plan: Plan;
	quantity: number;
	schedule: null;
	start_date: number;
	status: string;
	test_clock: null;
	transfer_data: null;
	trial_end: number;
	trial_settings: TrialSettings;
	trial_start: number;
};

type AutomaticTax = {
	enabled: boolean;
};

type CancellationDetails = {
	comment: null;
	feedback: null;
	reason: null;
};

type Items = {
	object: string;
	data: Datum[];
	has_more: boolean;
	total_count: number;
	url: string;
};

type Datum = {
	id: string;
	object: string;
	billing_thresholds: null;
	created: number;
	metadata: DatumMetadata;
	plan: Plan;
	price: Price;
	quantity: number;
	subscription: string;
	tax_rates: any[];
};

type Plan = {
	id: string;
	object: string;
	active: boolean;
	aggregate_usage: null;
	amount: number;
	amount_decimal: string;
	billing_scheme: string;
	created: number;
	currency: string;
	interval: string;
	interval_count: number;
	livemode: boolean;
	metadata: DatumMetadata;
	nickname: null;
	product: string;
	tiers_mode: null;
	transform_usage: null;
	trial_period_days: null;
	usage_type: string;
};

type Price = {
	id: string;
	object: string;
	active: boolean;
	billing_scheme: string;
	created: number;
	currency: string;
	custom_unit_amount: null;
	livemode: boolean;
	lookup_key: null;
	metadata: DatumMetadata;
	nickname: null;
	product: string;
	recurring: Recurring;
	tax_behavior: string;
	tiers_mode: null;
	transform_quantity: null;
	type: string;
	unit_amount: number;
	unit_amount_decimal: string;
};

type Recurring = {
	aggregate_usage: null;
	interval: string;
	interval_count: number;
	trial_period_days: null;
	usage_type: string;
};

type SubscriptionMetadata = {
	payingUserEmail: string;
};

type PaymentSettings = {
	payment_method_options: null;
	payment_method_types: null;
	save_default_payment_method: string;
};

type TrialSettings = {
	end_behavior: EndBehavior;
};

type EndBehavior = {
	missing_payment_method: string;
};

type GLTBox = GLTF & {
	nodes: {
		Cube: THREE.Mesh;
		Scene: THREE.Mesh;
		bookbottom: THREE.Mesh;
		bookcover: THREE.Mesh;
		bookcover001: THREE.Mesh;
		bookspine: THREE.Mesh;
		bookspine001: THREE.Mesh;
		booktop: THREE.Mesh;
	};
	materials: {
		"": THREE.MeshStandardMaterial;
		bookcover: THREE.MeshStandardMaterial;
		bookspine: THREE.MeshStandardMaterial;
		bookcover: THREE.MeshStandardMaterial;
		booktop: THREE.MeshStandardMaterial;
	};
};
