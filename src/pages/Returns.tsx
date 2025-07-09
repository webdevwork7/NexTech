
import { RotateCcw, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { COMPANY_CONFIG } from "@/config/company";

const Returns = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Returns</span> Policy
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our commitment to client satisfaction and project revision policies.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: January 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Returns Highlights */}
      <section className="pb-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: "Satisfaction Guarantee", desc: "We ensure you're happy with results" },
              { icon: RotateCcw, title: "Revision Process", desc: "Clear process for changes and updates" },
              { icon: Clock, title: "Timely Response", desc: "Quick response to revision requests" },
              { icon: AlertCircle, title: "Clear Terms", desc: "Transparent revision and refund terms" }
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

      {/* Returns Policy Content */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-effect border-white/10 animate-fade-in">
              <CardContent className="p-8 space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Our Commitment</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>At {COMPANY_CONFIG.COMPANY_NAME}, we are committed to delivering high-quality software solutions that meet your expectations. Our returns policy ensures client satisfaction through:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Clear project requirements and expectations</li>
                      <li>Regular progress reviews and feedback sessions</li>
                      <li>Revision rounds included in project scope</li>
                      <li>Satisfaction guarantee on delivered work</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. Revision Process</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>We include revision rounds in our project agreements:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Design projects: Up to 3 revision rounds included</li>
                      <li>Development projects: Bug fixes and minor adjustments included</li>
                      <li>Major scope changes: Handled as separate change requests</li>
                      <li>Timeline for revisions: Specified in project agreement</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Refund Eligibility</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Refunds may be considered in the following situations:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Failure to deliver project as per agreed specifications</li>
                      <li>Project cancellation before significant work begins</li>
                      <li>Breach of contract terms by our team</li>
                      <li>Technical impossibility discovered during development</li>
                    </ul>
                    <p><strong>Note:</strong> Refunds are not available for completed and delivered projects that meet agreed specifications.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Refund Process</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>If you believe you're eligible for a refund:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Contact us within 30 days of project completion</li>
                      <li>Provide detailed explanation of issues</li>
                      <li>Allow us opportunity to address concerns first</li>
                      <li>Refund processing time: 7-14 business days</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Non-Refundable Items</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>The following are generally non-refundable:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Third-party licenses and subscriptions</li>
                      <li>Domain names and hosting setup fees</li>
                      <li>Time spent on consultation and planning</li>
                      <li>Work completed according to approved specifications</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Partial Refunds</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>In some cases, partial refunds may be appropriate:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Project cancellation mid-development</li>
                      <li>Reduced scope due to technical limitations</li>
                      <li>Partial delivery of project components</li>
                      <li>Mutually agreed project modifications</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Alternative Solutions</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Before considering refunds, we offer:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Additional revision rounds</li>
                      <li>Extended support period</li>
                      <li>Bonus features or services</li>
                      <li>Credit toward future projects</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Contact for Returns</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>For returns, refunds, or revision requests:</p>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p><strong>Email:</strong> {COMPANY_CONFIG.EMAIL}</p>
                      <p><strong>Phone:</strong> {COMPANY_CONFIG.PHONE}</p>
                      <p><strong>Address:</strong> {COMPANY_CONFIG.ADDRESS}</p>
                    </div>
                    <p className="text-sm mt-4">Please include your project details and specific concerns when contacting us.</p>
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

export default Returns;
