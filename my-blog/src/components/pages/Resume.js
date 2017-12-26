import React, { Component } from 'react';

import resume from './Resume/resume.pdf'

class Resume extends Component {
    render() {
        return (
            <div className="Container">
                    <h3>
                    View or download my resume below
                    </h3>
                <object data={resume} type="application/pdf" width="400" height="650">
                    <p><b>Example fallback content</b>: This browser does not support PDFs. Please download the PDF to view it: <a href={resume}>Download PDF</a>.</p>
                </object>
                <p>
                <a id="download" href={resume}>Download PDF</a>
                </p>
            </div>

        );
    }


}


export default Resume;