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
