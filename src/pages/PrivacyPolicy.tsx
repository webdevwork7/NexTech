
import { Shield, Eye, Lock, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { COMPANY_CONFIG } from "@/config/company";

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Privacy</span> Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="pb-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Data Protection", desc: "Your data is encrypted and secure" },
              { icon: Eye, title: "Transparency", desc: "Clear information about data usage" },
              { icon: Lock, title: "Access Control", desc: "You control your personal information" },
              { icon: Database, title: "Minimal Collection", desc: "We only collect what's necessary" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="glass-effect border-white/10 text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-white/10 animate-fade-in">
              <CardContent className="p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Create an account or contact us</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Participate in surveys or promotions</li>
                      <li>Use our services or applications</li>
                    </ul>
                    <p>This may include your name, email address, phone number, company information, and project details.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices and support messages</li>
                      <li>Communicate with you about products, services, and events</li>
                      <li>Monitor and analyze trends and usage</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With your consent</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and safety</li>
                      <li>With service providers who assist in our operations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security assessments</li>
                      <li>Access controls and authentication</li>
                      <li>Employee training on data protection</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate data</li>
                      <li>Request deletion of your data</li>
                      <li>Object to processing of your data</li>
                      <li>Data portability</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Cookies and Tracking</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We use cookies and similar tracking technologies to collect and use personal information about you. You can control cookies through your browser settings.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p><strong>Email:</strong> {COMPANY_CONFIG.EMAIL}</p>
                      <p><strong>Phone:</strong> {COMPANY_CONFIG.PHONE}</p>
                      <p><strong>Address:</strong> {COMPANY_CONFIG.ADDRESS}</p>
                    </div>
                  </div>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
