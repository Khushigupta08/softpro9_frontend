import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { useAuth } from '../authContext';
import { buildApiUrl } from '../utils/apiConfig';

export default function EnrollmentFormModal({ onClose, onSubmitted }) {
  const { user } = useAuth();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    gender: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    country: '',
    idDocumentType: '',
    idDocumentNumber: '',
    paymentMethod: ''
  });
  const [file, setFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles?.[0]) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'application/pdf': ['.pdf']
    },
    maxSize: 5242880, // 5MB
    multiple: false
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      if (!file) {
        throw new Error('Please upload your identification document');
      }

      const token = localStorage.getItem('token');
      const fd = new FormData();
      Object.keys(form).forEach(k => {
        if (form[k] !== undefined) fd.append(k, form[k]);
      });
      fd.append('idDocumentFile', file);

      const res = await axios.post(buildApiUrl('/student/enrollment-form/submit'), 
        fd,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (res.data?.success !== false) {
        onSubmitted?.(res.data.user || res.data);
      } else {
        setError('Failed to submit form');
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to submit form');
    } finally {
      setSubmitting(false);
    }
  };

  const required = <span className="text-red-500">*</span>;

  return (
    <div className="fixed inset-0 overflow-y-auto z-50" style={{ backgroundColor: 'rgb(248, 249, 250)' }}>
      <div className="min-h-screen py-8">
        <div className="max-w-3xl mx-auto px-4">
          {/* Form Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Blue Header */}
            <div className="bg-[#1a73e8] text-white p-6 relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/20 transition-colors"
                aria-label="Close modal"
              >
                ×
              </button>
              <h2 className="text-2xl font-normal">Student Registration Form</h2>
              <p className="mt-2 text-sm opacity-90">Please complete this form to proceed with course enrollment</p>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 text-red-600 p-4 border-l-4 border-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Email Field (Read-only) */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <label className="block text-sm text-gray-700 mb-1">
                  Email {required}
                </label>
                <div className="flex items-center justify-between">
                  <span className="text-gray-900">{user?.email || 'Loading...'}</span>
                  <span className="text-sm text-blue-600 cursor-not-allowed">Switch account</span>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    First Name {required}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Last Name {required}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Contact & Gender */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Contact Number {required}
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={form.contactNumber}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Gender {required}
                  </label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Date of Birth {required}
                </label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Address {required}
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              {/* Location Fields */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    City {required}
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    State {required}
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Country {required}
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* ID Document Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Identification Document Type {required}
                  </label>
                  <select
                    name="idDocumentType"
                    value={form.idDocumentType}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select Document Type</option>
                    <option value="Aadhar">Aadhar Card</option>
                    <option value="PAN">PAN Card</option>
                    <option value="Passport">Passport</option>
                    <option value="Driving">Driving License</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Identification Number {required}
                  </label>
                  <input
                    type="text"
                    name="idDocumentNumber"
                    value={form.idDocumentNumber}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Identification Document Upload {required}
                </label>
                <div
                  {...getRootProps()}
                  className={`p-6 border-2 border-dashed rounded-lg text-center cursor-pointer
                    ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}
                    ${file ? 'bg-green-50 border-green-500' : ''}
                  `}
                >
                  <input {...getInputProps()} accept=".jpg,.jpeg,.png,.pdf" />
                  {file ? (
                    <div className="text-green-600">
                      <p>Selected file: {file.name}</p>
                      <p className="text-sm">Click or drag to replace</p>
                    </div>
                  ) : (
                    <div>
                      <p>Drop your file here, or click to select</p>
                      <p className="text-sm text-gray-500">
                        Supports: JPG, PNG, PDF (max 5MB)
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Method - Moved before ID Document section for better visibility */}
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200 mb-6">
                <label className="block text-lg font-semibold text-gray-800 mb-2">
                  Payment Method <span className="text-red-500">*</span>
                </label>
                <select
                  name="paymentMethod"
                  value={form.paymentMethod}
                  onChange={handleChange}
                  className="w-full p-4 text-lg border-2 border-blue-300 rounded-lg focus:ring-4 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="Net Banking">Net Banking</option>
                  <option value="UPI">UPI</option>
                  <option value="Cash">Cash</option>
                </select>
                <p className="mt-2 text-sm text-blue-600">Please select your preferred payment method</p>
              </div>

              {/* Form Actions */}
              <div className="flex justify-between items-center pt-6 border-t">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 text-white bg-red-500 hover:bg-red-300 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-8 py-2 bg-[#1a73e8] text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    ${submitting ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>

          {/* SOFTPRO9 Footer Banner */}
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm text-center">
            <img
              src="/images/logo.png"
              alt="SOFTPRO9"
              className="h-8 mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">
              Never submit passwords through this form. Report abuse.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
