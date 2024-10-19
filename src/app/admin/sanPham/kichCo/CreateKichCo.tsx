import { createKichCo } from "@/app/service/sanPham/kichCo";
import { IKichCo } from "@/app/type/data";
import { Button, DatePicker, Form, Input, message, Modal, Radio } from "antd";
import React from "react";

import { mutate } from "swr";

interface ModalAdd {
  visible: boolean;
  onClose: () => void;
}

const CreateKichCo = ({ visible, onClose }: ModalAdd) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: IKichCo) => {
    try {
      const result = await createKichCo(values);
      console.log(result);

      if (result.code !== 201) {
        message.error(`Thêm mới thất bại, ${result.message}`);
        
      } else {
        mutate("admin/kichCo");
        message.success("Thêm mới thành công");
        onClose();
        form.resetFields()
        console.log("Dữ liệu Thêm mới: ", values);
      }
    } catch (error) {
      message.error("Thêm mới thất bại");
    }
  };
  return (
    <>
      <Modal
        title={"Thêm mới kích cỡ"}
        visible={visible}
        onCancel={() => {
            form.resetFields(),
            onClose()
        }}
        footer={null}
      >
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item label="Size" name="tenKichCo">
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default CreateKichCo;
