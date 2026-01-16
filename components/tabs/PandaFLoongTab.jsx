// PandaFLoongTab.jsx
"use client";

import React from 'react';

const PandaFLoongTab = ({ dark }) => {
  return (
    <section className={`about_box ${dark ? "dark" : ""}`}>
      <div className="container mt-5">	
        <div className="row">	
          <div className="col-md-12 col-sm-12 col-xs-12">
            <h2>Panda-F.Loong</h2>
            <hr />
          </div>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="about_text">					
              <p><span style={{whiteSpace: 'nowrap'}}><br /></span></p>
              
              {/* 图片部分 */}
              <p style={{textAlign: 'center'}}>
                <img 
                  src="/assets/images/image4276.png" 
                  title="image" 
                  alt="Enhanced network connectivity" 
                  style={{maxWidth: '100%', height: 'auto'}} 
                />
              </p>
              <p style={{textAlign: 'center'}}>
                <strong><span style={{whiteSpace: 'nowrap'}}>Enhanced Network Connectivity</span></strong>
              </p>
              <p><span style={{whiteSpace: 'nowrap'}}><br /></span></p>
              
              <p style={{textAlign: 'center'}}>
                <span style={{whiteSpace: 'nowrap'}}>
                  <img 
                    src="/assets/images/image5158.png" 
                    title="image" 
                    alt="Optimized intermediate coordination number" 
                    style={{maxWidth: '100%', height: 'auto'}} 
                  />
                </span>
              </p>
              <p style={{textAlign: 'center'}}>
                <strong>Optimized Intermediate Coordination Number</strong>
              </p>
              
              {/* 产品介绍 */}
              <p>
                <strong><span style={{whiteSpace: 'nowrap', fontSize: '18px'}}>Panda-F.Loong</span></strong>
              </p>
              <p>
                <strong><span style={{whiteSpace: 'nowrap', fontSize: '18px'}}><br /></span></strong>
              </p>
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap', fontSize: '18px'}}>
                  &nbsp;<span style={{whiteSpace: 'nowrap', fontSize: '16px'}}>
                    Panda-F.Loong is a new generation of high-performance lithium aluminosilicate screen touch protection glass. This glass significantly improves drop resistance and strength performance, effectively meeting consumers' higher demands for product durability.
                  </span>
                </span>
              </p>
              <p style={{textIndent: '2em'}}><br /></p>
              
              {/* 玻璃规格尺寸 */}
              <p style={{textIndent: '0em'}}>
                <strong><span style={{fontSize: '18px'}}>Glass Specification Dimensions</span></strong>
              </p>
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap', fontSize: '18px'}}>
                  ● <span style={{whiteSpace: 'nowrap', fontSize: '16px'}}>Producible Thickness: 0.40-0.70mm</span>
                </span>
              </p>
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap', fontSize: '18px'}}><br /></span>
              </p>
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap', fontSize: '18px'}}>● Standard Size: 1300mm × 1100mm</span>
              </p>
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap', fontSize: '18px'}}><br /></span>
              </p>
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap', fontSize: '18px'}}>● Standard Stock Thickness: 0.40mm/0.50mm/0.55mm/0.60mm/0.65mm/0.70mm</span>
              </p>
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap', fontSize: '16px', color: 'rgb(0, 112, 192)'}}>
                  Note: Delivery size can be adjusted according to customer requirements
                </span>
              </p>
              <p>
                <strong><span style={{whiteSpace: 'nowrap', fontSize: '18px'}}><br /></span></strong>
              </p>
              
              {/* 玻璃性能相关数据 */}
              <p>
                <strong><span style={{whiteSpace: 'nowrap', fontSize: '18px'}}>Glass Performance Data</span></strong>
              </p>
              <p>
                <strong><span style={{whiteSpace: 'nowrap', fontSize: '18px'}}></span></strong>
              </p>
              
              {/* 热学和力学性能表格 */}
              <p style={{textIndent: '2em'}}>
                <strong><span style={{whiteSpace: 'nowrap', fontSize: '18px'}}>◆ Thermal and Mechanical Properties</span></strong>
              </p>
              
              <table className="ue-table-interlace-color-single" style={{borderCollapse: 'collapse', width: '100%'}} align="center">
                <tbody>
                  <tr className="ue-table-interlace-color-single firstRow">
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Density
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      g/cm³
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      2.45
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Thermal Expansion Coefficient
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      ×10⁻⁷/℃
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      82
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Softening Point
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      ℃
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      772
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Annealing Point
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      ℃
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      548
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Strain Point
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      ℃
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      508
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Young's Modulus
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      GPa
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      84
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Shear Modulus
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      GPa
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      34
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Poisson's Ratio
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      -
                    </td>
                    <td width="278" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.22
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td valign="middle" colSpan="1" rowSpan="1" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Vickers Hardness (before strengthening)
                    </td>
                    <td valign="middle" colSpan="1" rowSpan="1" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      kgf/mm²
                    </td>
                    <td valign="middle" colSpan="1" rowSpan="1" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      650
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td valign="middle" colSpan="1" rowSpan="1" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Vickers Hardness (after strengthening)
                    </td>
                    <td valign="middle" colSpan="1" rowSpan="1" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      kgf/mm²
                    </td>
                    <td valign="middle" colSpan="1" rowSpan="1" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      720
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td valign="middle" colSpan="1" rowSpan="1" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Pencil Hardness
                    </td>
                    <td valign="middle" colSpan="1" rowSpan="1" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      -
                    </td>
                    <td valign="middle" colSpan="1" rowSpan="1" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      &gt;8H
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <p><br /></p>
              
              {/* 光学性能表格 */}
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap'}}>◆ Optical Properties&nbsp;</span>
              </p>
              <p><span style={{whiteSpace: 'nowrap'}}></span></p>
              
              <table className="ue-table-interlace-color-single" style={{borderCollapse: 'collapse', width: '100%'}} align="center">
                <tbody>
                  <tr className="ue-table-interlace-color-single firstRow">
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Wavelength (nm)
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      365
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      405
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      518
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      595
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      640
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      Refractive Index
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      1.546
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      1.538
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      1.53
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      1.526
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      1.524
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      <p>Photoelastic Coefficient<br />(nm/cm/MPa)</p>
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      30.5
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      28.9
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      28
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      27.6
                    </td>
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      27.2
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="128" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff',
                      fontWeight: 'bold'
                    }}>
                      Transmittance (%)
                    </td>
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }} rowSpan="1" colSpan="5">
                      &gt;91.5
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <p><br /></p>
              
              {/* 电学性能表格 */}
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap'}}>◆ Electrical Properties&nbsp;</span>
              </p>
              <p><span style={{whiteSpace: 'nowrap'}}></span></p>
              
              <table className="ue-table-interlace-color-single" style={{borderCollapse: 'collapse', width: '100%'}}>
                <tbody>
                  <tr className="ue-table-interlace-color-single firstRow">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Test Frequency (MHz)
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      54
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      272
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      490
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      599
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      912
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      1499
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      1977
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      2500
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      Dielectric Constant
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      6.81
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      6.78
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      6.77
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      6.77
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      6.78
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      6.77
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      6.77
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      6.75
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      Loss Tangent
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.005
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.006
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.006
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.006
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.007
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.008
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.008
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.009
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <p><br /></p>
              
              {/* 耐化性能表格 */}
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap'}}>◆ Chemical Resistance</span>
              </p>
              <p><span style={{whiteSpace: 'nowrap'}}></span></p>
              
              <table className="ue-table-interlace-color-single" style={{borderCollapse: 'collapse', width: '100%'}}>
                <tbody>
                  <tr className="ue-table-interlace-color-single firstRow">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Reagent
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Concentration (%)
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Temperature (℃)
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Time (min)
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Mass Loss
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      NaOH
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      5
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      95±0.5
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      360
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      0.54 mg/cm²
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      HCl
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      5
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      95±0.5
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      1440
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.08 mg/cm²
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      HF
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      10
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      20±0.5
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      20
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      18.41 mg/cm²
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <p><br /></p>
              
              {/* CNC加工参数表格 */}
              <p>
                <span style={{whiteSpace: 'nowrap'}}>◆ Recommended CNC Processing Parameters</span>
              </p>
              <p><span style={{whiteSpace: 'nowrap'}}></span></p>
              
              <table className="ue-table-interlace-color-single" style={{borderCollapse: 'collapse', width: '100%'}}>
                <tbody>
                  <tr className="ue-table-interlace-color-single firstRow">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Item
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Spindle Speed (rpm)
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Depth of Cut (mm)
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Feed Rate (mm/min)
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Wheel Grit (mesh)
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      Drilling
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      40000 - 45000
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      0.01 - 0.02
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      150 - 200
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      400 - 450
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      Hole Expansion
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      40000 - 45000
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      /
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      100 - 150
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      400 - 450
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      Hole Finishing
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      40000 - 45000
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      0.02 - 0.04
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      120 - 180
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      1000 - 1200
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      Outer Shape Roughing
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      40000 - 45000
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.15 - 0.25
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      650 - 800
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      400 - 450
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      Outer Shape Finishing
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      40000 - 45000
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      0.05 - 0.10
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      1000 - 1200
                    </td>
                    <td width="158" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      1000 - 1200
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <p><span style={{whiteSpace: 'nowrap'}}></span><br /></p>
              
              {/* 强化工艺及参数推荐 */}
              <p style={{textIndent: '2em'}}>◆ Recommended Strengthening Process and Parameters</p>
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap'}}>1. Mixed Salt Process</span>
              </p>
              <p><span style={{whiteSpace: 'nowrap'}}></span></p>
              
              {/* 混盐工艺表格 */}
              <table className="ue-table-interlace-color-single" style={{borderCollapse: 'collapse', width: '100%'}}>
                <tbody>
                  <tr className="ue-table-interlace-color-single firstRow">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }} rowSpan="2" colSpan="1">
                      Thickness
                    </td>
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }} rowSpan="1" colSpan="2" width="78">
                      <p><span style={{fontSize: '14px'}}>Step 1 Strengthening</span></p>
                      <p><span style={{fontSize: '14px'}}>(60%NaNO₃:40%KNO₃)</span></p>
                    </td>
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }} rowSpan="1" colSpan="2">
                      <p><span style={{fontSize: '14px'}}>Step 2 Strengthening</span></p>
                      <p><span style={{fontSize: '14px'}}>(3%NaNO₃:97%KNO₃)</span></p>
                    </td>
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }} rowSpan="1" colSpan="4">
                      Recommended Strengthening Stress Range
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>Temperature (℃)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>Time (min)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>Temperature (℃)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>Time (min)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>CS (MPa)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>CS_30 (MPa)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>&nbsp;DOL (μm)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>DOL_K (μm)</span></p>
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.55
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      440
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      70
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      410
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥800
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥85
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥95
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      5.0～8.0
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      0.60
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      440
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      80
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      410
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥800
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥90
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥100
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      5.0～8.0
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.65
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      440
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      90
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      410
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥800
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥100
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      5.0～8.0
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      0.70
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      440
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      90
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      410
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥800
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥115
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      5.0～8.0
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Note
                    </td>
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }} rowSpan="1" colSpan="8">
                      Both 2D and 3D covers can use the same strengthening process
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <p><br /></p>
              
              {/* 纯盐工艺表格 */}
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap'}}>2. Pure Salt Process&nbsp;</span>
              </p>
              <p><span style={{whiteSpace: 'nowrap'}}></span></p>
              
              <table className="ue-table-interlace-color-single" style={{borderCollapse: 'collapse', width: '100%'}}>
                <tbody>
                  <tr className="ue-table-interlace-color-single firstRow">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }} rowSpan="2" colSpan="1">
                      Thickness
                    </td>
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }} rowSpan="1" colSpan="2">
                      <p><span style={{fontSize: '14px'}}>Step 1 Strengthening</span></p>
                      <p><span style={{fontSize: '14px'}}>(40%NaNO₃:60%KNO₃)</span></p>
                    </td>
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }} rowSpan="1" colSpan="2">
                      <p><span style={{fontSize: '14px'}}>Step 2 Strengthening</span></p>
                      <p><span style={{fontSize: '14px'}}>(100%KNO₃)</span></p>
                    </td>
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }} rowSpan="1" colSpan="4">
                      <span style={{fontSize: '14px'}}>Recommended Strengthening Stress Range</span>
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>Temperature (℃)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>Time (min)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>Temperature (℃)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>Time (min)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>CS (MPa)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>CS_30 (MPa)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>&nbsp;DOL (μm)</span></p>
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      <p><span style={{fontSize: '14px'}}>DOL_K (μm)</span></p>
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.55
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      440
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      100
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      410
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      70
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥800
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥85
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥95
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      5.0～8.0
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      0.60
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      440
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      100
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      410
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      70
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥800
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥90
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥100
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      5.0～8.0
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.65
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      440
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      410
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      70
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥800
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥100
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      ≥110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      5.0～8.0
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      0.70
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      440
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      410
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      70
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥800
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥110
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≥115
                    </td>
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      5.0～8.0
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="78" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Note
                    </td>
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }} rowSpan="1" colSpan="8">
                      Both 2D and 3D covers can use the same strengthening process
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <p><br /></p>
              
              {/* 3D热弯工艺推荐表格 */}
              <p style={{textIndent: '2em'}}>
                <span style={{whiteSpace: 'nowrap'}}>◆ Recommended 3D Hot Bending Process</span>
              </p>
              <p><span style={{whiteSpace: 'nowrap'}}></span></p>
              
              <table className="ue-table-interlace-color-single" style={{borderCollapse: 'collapse', width: '100%'}}>
                <tbody>
                  <tr className="ue-table-interlace-color-single firstRow">
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Item
                    </td>
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Temperature (℃)
                    </td>
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Pressure (MPa)
                    </td>
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 'bold'
                    }}>
                      Description
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      Preheating
                    </td>
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      480~680
                    </td>
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      /
                    </td>
                    <td width="203" valign="top" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      backgroundColor: '#fff'
                    }}>
                      According to the number of preheating stations in the hot bending machine, try to maintain temperature uniformity
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      Forming
                    </td>
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      660~680
                    </td>
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa'
                    }}>
                      0.05~0.40
                    </td>
                    <td width="203" valign="top" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      backgroundColor: '#f8f9fa'
                    }}>
                      Adjust pressure range according to product single-side or multi-side curvature and bending angle
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-double">
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      Cooling
                    </td>
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      680~300
                    </td>
                    <td width="203" valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#fff'
                    }}>
                      ≤0.25
                    </td>
                    <td width="203" valign="top" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      backgroundColor: '#fff'
                    }}>
                      To ensure contour rebound, it is recommended to adjust the pressure of the first two cooling stations to 0.1～0.2MPa
                    </td>
                  </tr>
                  <tr className="ue-table-interlace-color-single">
                    <td valign="middle" style={{
                      border: '1px solid #ddd',
                      padding: '8px',
                      wordBreak: 'break-all',
                      textAlign: 'center',
                      backgroundColor: '#f8f9fa',
                      fontStyle: 'italic'
                    }} rowSpan="1" colSpan="4">
                      Note: The temperature difference fluctuation between different brands of hot bending machines and between different machines of the same brand is kept within ±20℃.
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <p><br /></p>
              
              {/* 强化实例 */}
              <p>
                <span style={{whiteSpace: 'nowrap'}}>◆ Strengthening Example</span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}><br /></span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}>&nbsp;&nbsp;&nbsp;&nbsp;Sample Specifications: 2.5D 155×73×0.60mm</span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}><br /></span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}>&nbsp;&nbsp;&nbsp;&nbsp;Strengthening Performance:</span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}><br /></span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}>&nbsp;· Four-point bending &gt;600MPa</span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}><br /></span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}>&nbsp;· Center ball drop performance ≥ 0.30J</span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}><br /></span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}>&nbsp;· Warpage &lt;0.25mm&nbsp;</span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}><br /></span>
              </p>
              <p>
                <span style={{whiteSpace: 'nowrap'}}>&nbsp;· Sandpaper drop ≥ 150cm&nbsp;</span>
              </p>
              <p><br /></p>
            </div>
          </div>       
        </div>
      </div>
    </section>
  );
};

export default PandaFLoongTab;