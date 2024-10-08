import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Wakefit';
  email: string = '';
  showModal: boolean = false; 
  isModalOpen: boolean = false; 
  modalTitle: string = '';
  modalContent: string = '';
  private timeoutId: any; 
  isHovering: boolean = false;
  hoverTimeout: any;
  
  categories = [
    {
      categoryId: 1,
      name: 'Kitchen',
      imageUrl: 'https://img.freepik.com/free-photo/kitchen-interior-design-with-wooden-furniture_23-2148848699.jpg?t=st=1724836531~exp=1724840131~hmac=4bb1479f84a2bcedd94a52747076f3bb0541e2b13a3e443a924d0aadcc4f309c&w=900'
    },
    {
      categoryId: 2,
      name: 'Office',
      imageUrl: 'https://img.freepik.com/premium-photo/office-furniture_664434-499.jpg?w=900'
    },
    {
      categoryId: 3,
      name: 'Bedroom',
      imageUrl: 'https://img.freepik.com/premium-photo/elegant-cozy-modern-bedroom-interior-design-with-stylish-decor-mockup-poster-background_950414-81925.jpg?w=900'
    },
    {
      categoryId: 4,
      name: 'Home Decor',
      imageUrl: 'https://img.freepik.com/premium-photo/green-plant-pot-coffee-table-against-backdrop-cozy-sofa-blur-background-ai_1038983-32080.jpg?w=900'
    },
    {
      categoryId: 5,
      name: 'Kids Room',
      imageUrl: 'https://img.freepik.com/premium-photo/inclusive-classrooms-adaptive-learning-environments-students-with-special-needs_1148697-1308.jpg?w=900'
    },
    {
      categoryId: 6,
      name: 'Garden Decor',
      imageUrl: 'https://img.freepik.com/free-photo/table-bench-full-plants_23-2147997132.jpg?t=st=1724849829~exp=1724853429~hmac=4279f45c691f65df17ece870138eb19e433d5ae6fc2ac62ebeadb99f0e6b772d&w=900'
    }
  ];

  privacyPolicies = {
    services: {
      title: 'Services',
      content: 'At Wakefit, we collect and use your information to provide and improve our services. This includes personalization, customer support, and updates on our offerings.'
    },
    offers: {
      title: 'Exclusive Offers',
      content: 'At Wakefit, we value your interest and want to ensure you get the best deals. We may send you information about exclusive offers and promotions based on your preferences.'
    },
    locations: {
      title: 'Locations',
      content: 'Location data is collected to provide you with the best possible service. This may include recommendations for products based on your geographical area.'
    },
    FAQs: {
      title: 'FAQs',
      content: '1. What products does Wakefit offer? 2. How can I contact customer support? 3. What is Wakefit’s return policy? 4. How do I track my order?'
    },
    overview: {
      title: 'Privacy Policy Overview',
      content: 'Wakefit recognizes the importance of protecting personal details and information. This privacy policy describes how we collect, use, and disclose your information.'
    },
    dataProtection: {
      title: 'Data Protection',
      content: 'We collect Personal Information when you choose to provide it, including when you register to use the Website, use the Website, and communicate with us. We also gather Non-Personal Information through cookies and similar technologies.'
    },
    cookiesPolicy: {
      title: 'Cookies Policy',
      content: 'When you visit the Website, we and our third-party service providers receive and record information from your browser, including your IP address, and from cookies, pixels, and similar technology. Cookies are small text files placed in your browser to store preferences.'
    },
    termsOfService: {
      title: 'Terms of Services',
      content: 'The use of the Site, including the purchase of any Products, is subject to the following Terms. Please read these Terms carefully before using the Site. By using this Site, you agree to these Terms.'
    },
    contactUs: {
      title: 'Contact Us',
      content: 'If you have any questions or concerns regarding our privacy practices, please reach out to us through our contact form or customer service. We are here to assist you.'
    }
  };
  

  openModal(policyKey: keyof typeof this.privacyPolicies): void {
    clearTimeout(this.hoverTimeout); // Clear any existing timeout
    this.isHovering = true;
    const policy = this.privacyPolicies[policyKey];
    this.modalTitle = policy.title;
    this.modalContent = policy.content;
    this.isModalOpen = true;
  }
  
  closeModal(): void {
    this.isHovering = false;
    this.hoverTimeout = setTimeout(() => {
      if (!this.isHovering) {
        this.isModalOpen = false;
      }
    }, 200); 
  }
  
  onMouseEnter(): void {
    this.isHovering = true;
    clearTimeout(this.hoverTimeout); 
  }
  
  onMouseLeave(): void {
    this.isHovering = false;
    this.hoverTimeout = setTimeout(() => {
      if (!this.isHovering) {
        this.isModalOpen = false;
      }
    }, 200); 
  }
  onSubscribe(): void {
    if (this.email.trim()) {
      this.showModal = true;
      this.email = ''; 
    }
  }

  closeSubscriptionModal(): void {
    this.showModal = false;
  }
}
