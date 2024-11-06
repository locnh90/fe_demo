import { updateKichCo } from "@/app/service/sanPham/kichCo";
import { IKichCo } from "@/app/type/data";
import { Form, Input, message, Modal } from "antd";
import React, { useEffect } from "react";

interface IProps {
  isUpdateModal: boolean;
  setIsUpdateModal: (v: boolean) => void;
  dataUpdate: any;
  setDataUpdate: any;
}
const UpdateKichCo = ({
  dataUpdate,
  isUpdateModal,
  setIsUpdateModal,
  setDataUpdate,
}: IProps) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (dataUpdate) {
      form.setFieldsValue({
        tenKichCo: dataUpdate.tenKichCo,
      });
    }
  }, [dataUpdate]);

  const handleCloseUpdate = () => {
    form.resetFields();
    setIsUpdateModal(false);
    setDataUpdate(null);
  };

  const onFinish = async (value: IKichCo) => {
    const { tenKichCo } = value;
    try {
      if (dataUpdate) {
        const data = {
          tenKichCo,
          id: dataUpdate.id, // Đảm bảo id tồn tại
        };
        console.log(data);

        const result = await updateKichCo(data);
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
          label="Size"
          name="tenKichCo"
          rules={[{ required: true, message: "Vui lòng nhập tên kích cỡ!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateKichCo;
