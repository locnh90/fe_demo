'use client'
import { handleCreateKichCo } from '@/app/actions/admin/sanPham/kichCo';
import { Modal, Form, Input, Button, message } from 'antd';
import { useState } from 'react';

const BtnAdd = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleFormSubmit = async (values: any) => {
    const res = await handleCreateKichCo(values)
    console.log(res);
    
    if(res.code === 409){
      message.warning('Da ton tai')
    }
    if(res.code === 201){
      message.success('Them thanh cong')
    }
    
    handleCloseModal()
  };

  

  return (
    <>
      <Button type="primary" onClick={handleOpenModal}>
        Thêm kích cỡ
      </Button>
      <Modal
        title="Kích cỡ "
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null} // Không hiển thị nút OK và Cancel mặc định
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit}
        >
          <Form.Item
            label="Size"
            name="tenKichCo"
            rules={[{ required: true, message: 'Vui lòng nhập size' }]}
          >
            <Input/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default BtnAdd;
