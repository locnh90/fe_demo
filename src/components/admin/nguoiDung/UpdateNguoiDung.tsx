import { updateKichCo } from "@/app/service/sanPham/kichCo";
import { updateNguoiDung } from "@/app/service/taiKhoan/nguoiDung";
import { IKichCo, INguoiDung } from "@/app/type/data";
import { Form, Input, message, Modal } from "antd";
import React, { useEffect } from "react";

interface IProps {
  isUpdateModal: boolean;
  setIsUpdateModal: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}
const UpdateNguoiDung = ({
  dataUpdate,
  isUpdateModal,
  setIsUpdateModal,
  setDataUpdate,
}: IProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (dataUpdate) {
      form.setFieldsValue({
        hoTen: dataUpdate.hoTen,
      });
    }
  }, [dataUpdate]);

  const handleCloseUpdate = () => {
    form.resetFields();
    setIsUpdateModal(false);
    setDataUpdate(null);
  };

  const onFinish = async (value: any) => {
    const { hoTen } = value;
    try {
      if (dataUpdate) {
        const data = {
          hoTen,
          id: dataUpdate.id, // Đảm bảo id tồn tại
        };
        console.log(data);

        const result = await updateNguoiDung(data);
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
      title="Cập nhật kích cỡ"
      open={isUpdateModal}
      onOk={() => form.submit()}
      onCancel={() => handleCloseUpdate()}
      maskClosable={false}
    >
      <Form name="basic" onFinish={onFinish} layout="vertical" form={form}>
        <Form.Item
          label="Họ tên"
          name="hoTen"
          rules={[{ required: true, message: "Vui lòng nhập tên kích cỡ!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateNguoiDung;
