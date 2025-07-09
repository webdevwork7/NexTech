
import { Truck, Clock, MapPin, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_CONFIG } from "@/config/company";

const Shipping = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Shipping</span> Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Information about delivery of physical products and project deliverables.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Highlights */}
      <section className="pb-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: "Digital Delivery", desc: "Software solutions delivered digitally" },
              { icon: Truck, title: "Hardware Shipping", desc: "Physical products shipped worldwide" },
              { icon: Clock, title: "Timely Delivery", desc: "Respect for project timelines" },
              { icon: MapPin, title: "Global Reach", desc: "We serve clients worldwide" }
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

      {/* Shipping Policy Content */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-white/10 animate-fade-in">
              <CardContent className="p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Digital Deliverables</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Most of our services are delivered digitally, including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Software applications and source code</li>
                      <li>Design files and assets</li>
                      <li>Documentation and user guides</li>
                      <li>Digital certificates and licenses</li>
                    </ul>
                    <p>Digital deliverables are typically provided through secure cloud platforms or direct download links.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Project Delivery Timeline</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Project delivery timelines are established during the planning phase:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Initial timeline provided in project proposal</li>
                      <li>Milestones and delivery dates clearly defined</li>
                      <li>Regular progress updates provided</li>
                      <li>Client approval may affect delivery dates</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Physical Products</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>When physical products are involved (hardware, promotional materials, etc.):</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Shipping costs are calculated separately</li>
                      <li>Delivery time varies by location</li>
                      <li>Tracking information provided when available</li>
                      <li>Insurance available for high-value items</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. International Delivery</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We serve clients globally with considerations for:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Time zone differences in project communication</li>
                      <li>Local regulations and compliance requirements</li>
                      <li>Currency and payment method preferences</li>
                      <li>Cultural and language considerations</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Delivery Confirmation</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We ensure proper delivery confirmation through:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Email notifications for digital deliverables</li>
                      <li>Client sign-off on project milestones</li>
                      <li>Training and handover sessions</li>
                      <li>Support documentation and resources</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Delays and Issues</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>In case of delivery delays:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Immediate notification to affected clients</li>
                      <li>Explanation of delay causes</li>
                      <li>Revised timeline and mitigation plan</li>
                      <li>Compensation if applicable per contract terms</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Post-Delivery Support</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>After delivery, we provide:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Warranty period as specified in contract</li>
                      <li>Bug fixes and critical updates</li>
                      <li>Technical support and troubleshooting</li>
                      <li>Maintenance and ongoing support options</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>For shipping and delivery inquiries:</p>
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

export default Shipping;
