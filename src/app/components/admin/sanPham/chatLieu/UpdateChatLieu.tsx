import { updateChatLieu } from "@/app/service/sanPham/chatLieu";
import { updateKichCo } from "@/app/service/sanPham/kichCo";
import { IChatLieu, IKichCo } from "@/app/type/data";
import { Form, Input, message, Modal } from "antd";
import React, { useEffect } from "react";

interface IProps {
  isUpdateModal: boolean;
  setIsUpdateModal: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}
const UpdateChatLieu = ({
  dataUpdate,
  isUpdateModal,
  setIsUpdateModal,
  setDataUpdate,
}: IProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (dataUpdate) {
      form.setFieldsValue({
        tenChatLieu: dataUpdate.tenChatLieu,
      });
    }
  }, [dataUpdate]);

  const handleCloseUpdate = () => {
    form.resetFields();
    setIsUpdateModal(false);
    setDataUpdate(null);
  };

  const onFinish = async (value: IChatLieu) => {
    const { tenChatLieu } = value;
    try {
      if (dataUpdate) {
        const data = {
          tenChatLieu,
          id: dataUpdate.id, // Đảm bảo id tồn tại
        };
        console.log(data);

        const result = await updateChatLieu(data);
        if (result.data) {
          handleCloseUpdate();
          message.success(`${result.message}`);
          console.log(result);
        } else {
          message.error(`${result.message}`);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      title="Cập nhật chất liệu"
      open={isUpdateModal}
      onOk={() => form.submit()}
      onCancel={() => handleCloseUpdate()}
      maskClosable={false}
    >
      <Form name="basic" onFinish={onFinish} layout="vertical" form={form}>
        <Form.Item
          label="Tên chất liệu"
          name="tenChatLieu"
          rules={[{ required: true, message: "Vui lòng nhập tên chất liệu!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateChatLieu;
