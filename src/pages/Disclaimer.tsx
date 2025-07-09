
import { AlertTriangle, Info, Shield, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_CONFIG } from "@/config/company";

const Disclaimer = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Disclaimer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Important information about the use of our website and services.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Highlights */}
      <section className="pb-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertTriangle, title: "Important Notice", desc: "Please read this disclaimer carefully" },
              { icon: Info, title: "Information Use", desc: "How to properly use our information" },
              { icon: Shield, title: "Liability Limits", desc: "Understanding our responsibilities" },
              { icon: FileText, title: "Legal Protection", desc: "Rights and limitations" }
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

      {/* Disclaimer Content */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-white/10 animate-fade-in">
              <CardContent className="p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. General Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>The information on this website is provided by {COMPANY_CONFIG.COMPANY_NAME} on an "as is" basis. To the fullest extent permitted by law, this Company:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Excludes all representations and warranties relating to this website and its contents</li>
                      <li>Excludes all liability for damages arising out of or in connection with your use of this website</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Website Content</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>The information on this website is provided for general information purposes only and should not be relied upon or used as the sole basis for making decisions. We make no warranties about:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>The accuracy, completeness, or timeliness of information</li>
                      <li>The suitability of information for any particular purpose</li>
                      <li>The availability or operation of this website</li>
                      <li>That the website will be error-free or virus-free</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Professional Services</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Our software development and consulting services are provided based on:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Information provided by clients</li>
                      <li>Industry best practices and standards</li>
                      <li>Available technology and resources</li>
                      <li>Project scope and requirements</li>
                    </ul>
                    <p>Results may vary based on implementation, maintenance, and external factors beyond our control.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>To the maximum extent permitted by law, {COMPANY_CONFIG.COMPANY_NAME} shall not be liable for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Any direct, indirect, incidental, consequential, or punitive damages</li>
                      <li>Loss of profits, data, or business opportunities</li>
                      <li>Interruption of business operations</li>
                      <li>Any damages arising from use of third-party services or software</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Third-Party Links and Content</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>This website may contain links to third-party websites or references to third-party products and services. We:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Do not endorse or assume responsibility for third-party content</li>
                      <li>Are not liable for any damages or issues arising from third-party services</li>
                      <li>Recommend reviewing third-party terms and privacy policies</li>
                      <li>May receive compensation for some third-party recommendations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Technical Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Technical information, code examples, and tutorials provided are:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>For educational and informational purposes</li>
                      <li>May not be suitable for production use without modification</li>
                      <li>Should be tested thoroughly before implementation</li>
                      <li>Subject to changes in technology and best practices</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Updates and Changes</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We reserve the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Update or modify website content at any time</li>
                      <li>Change our services, pricing, or policies</li>
                      <li>Discontinue any aspect of our website or services</li>
                      <li>Update this disclaimer without prior notice</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>This disclaimer is governed by the laws of California, United States. Any disputes arising from the use of this website or our services shall be subject to the jurisdiction of California courts.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you have questions about this disclaimer:</p>
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

export default Disclaimer;
