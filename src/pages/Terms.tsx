
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_CONFIG } from "@/config/company";

const Terms = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Highlights */}
      <section className="pb-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "Agreement", desc: "Legal contract between you and us" },
              { icon: Scale, title: "Fair Terms", desc: "Balanced rights and responsibilities" },
              { icon: Shield, title: "Protection", desc: "Safeguards for both parties" },
              { icon: AlertTriangle, title: "Important", desc: "Please read carefully" }
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

      {/* Terms Content */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-white/10 animate-fade-in">
              <CardContent className="p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>By accessing and using {COMPANY_CONFIG.COMPANY_NAME}'s services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>{COMPANY_CONFIG.COMPANY_NAME} provides software development services including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Custom software development</li>
                      <li>Web and mobile application development</li>
                      <li>UI/UX design services</li>
                      <li>Cloud and DevOps solutions</li>
                      <li>AI/ML implementation</li>
                      <li>Cybersecurity services</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>You agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information</li>
                      <li>Use our services in compliance with applicable laws</li>
                      <li>Not interfere with or disrupt our services</li>
                      <li>Respect intellectual property rights</li>
                      <li>Maintain confidentiality of sensitive information</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Payment terms will be specified in individual project agreements. Generally:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Payment schedules are defined per project</li>
                      <li>Invoices are due within 30 days of receipt</li>
                      <li>Late payments may incur additional charges</li>
                      <li>Disputes must be raised within 30 days</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Intellectual property rights are handled as follows:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Custom-developed solutions: Rights transfer to client upon full payment</li>
                      <li>Pre-existing tools and frameworks: We retain rights</li>
                      <li>Third-party components: Subject to their respective licenses</li>
                      <li>Confidential information: Protected under separate agreements</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Our liability is limited to the extent permitted by law. We are not liable for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Indirect, incidental, or consequential damages</li>
                      <li>Loss of profits, data, or business opportunities</li>
                      <li>Third-party services or integrations</li>
                      <li>Force majeure events</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Either party may terminate services:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>With 30 days written notice</li>
                      <li>Immediately for material breach</li>
                      <li>Payment obligations survive termination</li>
                      <li>Confidentiality obligations continue</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Changes to Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>For questions about these terms, contact us:</p>
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

export default Terms;
