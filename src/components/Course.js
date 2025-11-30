import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, Users, Trophy, ArrowLeft, Heart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import EnrollmentFormModal from './EnrollmentFormModal';
import { buildApiUrl } from '../utils/apiConfig';

export default function Course() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCourse();
  }, [slug]);

  const fetchCourse = async () => {
    try {
      const res = await fetch(buildApiUrl(`/api/courses/${slug}`));
      const data = await res.json();
      if (data.success) {
        setCourse(data.data);
      }
    } catch (error) {
      console.error('Error fetching course:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-12">Loading course...</div>;
  if (!course) return <div className="text-center py-12">Course not found</div>;

  return (
    <>
      <Helmet>
        <title>{course.name} - SoftPro9 Academy</title>
        <meta name="description" content={course.description?.slice(0, 160)} />
      </Helmet>

      <div className="max-w-6xl mx-auto p-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Course Info */}
          <div className="md:col-span-2">
            {course.thumbnail && (
              <img
                src={buildApiUrl(course.thumbnail)}
                alt={course.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}

            <h1 className="text-4xl font-bold mb-4">{course.name}</h1>

            <div className="flex gap-6 mb-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>{course.duration} hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>{course.level}</span>
              </div>
              {course.rating && (
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-400" />
                  <span>{course.rating} rating</span>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Description</h2>
              <p className="text-gray-700">{course.description}</p>
            </div>

            {course.syllabus && (
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Syllabus</h2>
                <div className="bg-gray-50 p-4 rounded-lg" dangerouslySetInnerHTML={{ __html: course.syllabus }} />
              </div>
            )}

            {course.instructor && (
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Instructor</h2>
                <p className="text-gray-700">{course.instructor}</p>
              </div>
            )}
          </div>

          {/* Right Column - Enrollment */}
          <div className="md:col-span-1">
            <div className="bg-blue-50 p-6 rounded-lg sticky top-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                ₹{course.price?.toLocaleString() || 'Contact'}
              </div>
              <p className="text-gray-600 mb-6">
                {course.originalPrice && (
                  <span className="line-through">₹{course.originalPrice.toLocaleString()}</span>
                )}
              </p>

              <button
                onClick={() => setEnrollmentOpen(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 mb-4"
              >
                Enroll Now
              </button>

              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg border ${
                  isSaved ? 'bg-red-50 border-red-200' : 'bg-white border-gray-200'
                }`}
              >
                <Heart size={20} fill={isSaved ? 'red' : 'none'} color={isSaved ? 'red' : 'gray'} />
                {isSaved ? 'Saved' : 'Save Course'}
              </button>

              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex items-center gap-2">
                  <Trophy size={20} className="text-yellow-500" />
                  <span className="text-sm">Completion Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-blue-600" />
                  <span className="text-sm">Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-green-600" />
                  <span className="text-sm">Self-paced Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EnrollmentFormModal
        course={course}
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
      />
    </>
  );
}
